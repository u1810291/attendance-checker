/* eslint-disable array-callback-return */
import moment from 'moment';

export function dataSelector(data){
  const filtered = data.map((el)=>({
    avatar_image_id: el.avatar_image_id,
    first_name: el.first_name,
    id: el.id,
    images: el.images[0],
    last_name: el.last_name,
    list_id: el.list_id,
    permissions:el.permissions,
    plates: el.plates,
    plates_count: el.plates_count,
    urls: el.urls
  }))
  return { data: filtered }
}
export function faceSelector(data){
  const matched = [...new Set(data.map((el)=>el.face_identities[0].faces[0].id))];
  const filter = matched.map((el)=>({...(data.filter((item)=>item.face_identities[0].faces[0].id === el ))}));
  
  const channel2428IN = filter.map((el) => Object.entries(el).filter(([_, item])=>item.channel_id === 2428));
  const channel2429OUT = filter.map((el) => Object.entries(el).filter(([_, item])=>item.channel_id === 2429));

  const lastIn = channel2428IN.map((item, _) => Math.max.apply(null,item.map(([_, item])=> [item.end_time])));
  const firstIn = channel2428IN.map((item, _) => Math.min.apply(null,item.map(([_, item])=> [item.end_time])));
  const lastOut = channel2429OUT.map((item, _) => Math.max.apply(null,item.map(([_, item])=> [item.end_time])));
  const filterByPeopleIn = channel2428IN.map((item, i)=>item.filter((el, j)=>el[1].end_time === lastIn[i]))
  const filterByPeopleOut = channel2429OUT.map((item, i)=>item.filter((el, j)=>el[1].end_time === lastOut[i]))

  const filtered = [filterByPeopleIn, filterByPeopleOut];  
  const lastFiltered = [...Array(filter.length)].map((_, i)=>({    
    id: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.face_identities[0].faces[0].id})).toString().split(',')[1],
    images: {
      image_thumbnail: parseInt(filterByPeopleIn[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]) > parseInt(filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]) ? 
      filterByPeopleIn[i].map((el)=>el.map((item, i)=> {if(i === 1) return item.snapshots[1].path})).toString().split(',')[1] : filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i === 1) return item.snapshots[1].path})).toString().split(',')[1], 
      quality: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.face_identities[0].faces[0].similarity})).toString().split(',')[1],
    },
    full_name: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return `${item.face_identities[0].faces[0].first_name} ${item.face_identities[0].faces[0].last_name}`})).toString().split(',')[1],
    in_time: moment(new Date(parseInt(filterByPeopleIn[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]))).format("HH:mm:ss"),
    out_time: moment(new Date(parseInt(filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]))).format("HH:mm:ss"),
    number_of_in: channel2428IN[i].length,
    number_of_out: channel2429OUT[i].length,
    time_at_work: `0${(new Date(lastOut[i]).getHours() - new Date(firstIn[i]).getHours())}:${Math.abs(new Date(lastOut[i]).getMinutes() - new Date(firstIn[i]).getMinutes())}`,
    time_out_work: `${new Date().getHours() - new Date(lastOut[i]).getHours()}:${Math.abs(new Date().getMinutes() - new Date(lastOut[i]).getMinutes())}`,
    current: parseInt(filterByPeopleIn[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]) > parseInt(filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]) ? 
      true: false,
  }))
  return { data: lastFiltered, filtered }
}


export function fullListSelector(data){
  const matched = [...new Set(data.map((el)=>el.face_identities[0].faces[0].id))];
  const filter = matched.map((el)=>({...(data.filter((item)=>item.face_identities[0].faces[0].id === el ))}));
  
  const channel2428IN = filter.map((el) => Object.entries(el).filter(([_, item])=>item.channel_id === 2428));
  const channel2429OUT = filter.map((el) => Object.entries(el).filter(([_, item])=>item.channel_id === 2429));

  const lastIn = channel2428IN.map((item, _) => Math.max.apply(null,item.map(([_, item])=> [item.end_time])));
  const firstIn = channel2428IN.map((item, _) => Math.min.apply(null,item.map(([_, item])=> [item.end_time])));
  const lastOut = channel2429OUT.map((item, _) => Math.max.apply(null,item.map(([_, item])=> [item.end_time])));
  const filterByPeopleIn = channel2428IN.map((item, i)=>item.filter((el, j)=>el[1].end_time === lastIn[i]))
  const filterByPeopleOut = channel2429OUT.map((item, i)=>item.filter((el, j)=>el[1].end_time === lastOut[i]))

  const filtered = [filterByPeopleIn, filterByPeopleOut];  
  const lastFiltered = [...Array(filter.length)].map((_, i)=>({    
    id: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.face_identities[0].faces[0].id})).toString().split(',')[1],
    images: {
      image_thumbnail: parseInt(filterByPeopleIn[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]) > parseInt(filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]) ? 
      filterByPeopleIn[i].map((el)=>el.map((item, i)=> {if(i === 1) return item.snapshots[1].path})).toString().split(',')[1] : filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i === 1) return item.snapshots[1].path})).toString().split(',')[1], 
      quality: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.face_identities[0].faces[0].similarity})).toString().split(',')[1],
    },
    full_name: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return `${item.face_identities[0].faces[0].first_name} ${item.face_identities[0].faces[0].last_name}`})).toString().split(',')[1],
    in_time: moment(new Date(parseInt(filterByPeopleIn[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]))).format("HH:mm:ss"),
    out_time: moment(new Date(parseInt(filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]))).format("HH:mm:ss"),
    number_of_in: channel2428IN[i].length,
    number_of_out: channel2429OUT[i].length,
    time_at_work: `0${(new Date(lastOut[i]).getHours() - new Date(firstIn[i]).getHours())}:${Math.abs(new Date(lastOut[i]).getMinutes() - new Date(firstIn[i]).getMinutes())}`,
    time_out_work: `${new Date().getHours() - new Date(lastOut[i]).getHours()}:${Math.abs(new Date().getMinutes() - new Date(lastOut[i]).getMinutes())}`,
    current: parseInt(filterByPeopleIn[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]) > parseInt(filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]) ? 
      true: false,
  }))
  return { data: lastFiltered, filtered }
}

