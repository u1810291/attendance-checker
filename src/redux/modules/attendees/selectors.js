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
  // const timings = filter.map((item, _) => Math.max.apply(null,Object.entries(item).map(([_, item])=> [item.end_time])));
  // console.log(timings)
  const lastIn = channel2428IN.map((item, _) => Math.max.apply(null,item.map(([_, item])=> [item.end_time])));
  const lastOut = channel2429OUT.map((item, _) => Math.max.apply(null,item.map(([_, item])=> [item.end_time])));
  const filterByPeopleIn = channel2428IN.map((item, i)=>item.filter((el, j)=>el[1].end_time === lastIn[i]))
  const filterByPeopleOut = channel2429OUT.map((item, i)=>item.filter((el, j)=>el[1].end_time === lastOut[i]))

  const filtered = [filterByPeopleIn, filterByPeopleOut];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  
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
    number_of_in: getRandomInt(5),
    number_of_out:getRandomInt(3),
    time_at_work: 5,
    time_out_work: 2,
    current: getRandomInt(2),
  }))
  return { data: lastFiltered, filtered }
}

