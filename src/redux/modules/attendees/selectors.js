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
  
  // 1620802500 - 1620803100,  6:55 - 7:05
  // 1620813300 - 1620813900,  9:55 - 10:05
  // 1620824100 - 1620824700,  12:55 - 13:05
  // 1620834900 - 1620835500,  15:55 - 16:05
  // 1620845700 - 1620846300   18:55 - 19:05

  const channel2428IN = filter.map((el) => Object.entries(el).filter(([_, item])=>item.channel_id === 2428));
  const channel2429OUT = filter.map((el) => Object.entries(el).filter(([_, item])=>item.channel_id === 2429));
  const morning_check = channel2428IN.filter((item,_)=>item.map((_, el)=>el.end_time) > 1620802500 || item.map((_, el)=>el.end_time) < 1620803100)
  const check_1 = channel2428IN.filter((item,_)=>item.map((_, el)=>el.end_time) > 1620813300 || item.map((_, el)=>el.end_time) < 1620813900) 
  const check_2 = channel2428IN.filter((item,_)=>item.map((_, el)=>el.end_time) > 1620824100 || item.map((_, el)=>el.end_time) < 1620824700)
  const check_3 = channel2428IN.filter((item,_)=>item.map((_, el)=>el.end_time) > 1620834900 || item.map((_, el)=>el.end_time) < 1620835500)
  const check_4 = channel2428IN.filter((item,_)=>item.map((_, el)=>el.end_time) > 1620845700 || item.map((_, el)=>el.end_time) < 1620846300)
  console.log(morning_check)
  console.log(check_1)
  console.log(check_2)
  console.log(check_3)
  console.log(check_4)
  
  const lastIn = channel2428IN.map((item, _) => Math.max.apply(null,item.map(([_, item])=> [item.end_time])));
  
  const lastOut = channel2429OUT.map((item, _) => Math.max.apply(null,item.map(([_, item])=> [item.end_time])));
  const filterByPeopleIn = channel2428IN.map((item, i)=>item.filter((el, j)=>el[1].end_time === lastIn[i]))
  const filterByPeopleOut = channel2429OUT.map((item, i)=>item.filter((el, j)=>el[1].end_time === lastOut[i]))

  const lastFiltered = [...Array(filter.length)].map((_, i)=>({
    id: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.face_identities[0].faces[0].id})).toString().split(',')[1],
    images: {
      image_thumbnail: parseInt(filterByPeopleIn[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]) > parseInt(filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]) ? 
      filterByPeopleIn[i].map((el)=>el.map((item, i)=> {if(i === 1) return item.snapshots[1].path})).toString().split(',')[1] : filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i === 1) return item.snapshots[1].path})).toString().split(',')[1], 
      quality: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.face_identities[0].faces[0].similarity})).toString().split(',')[1],
    },
    full_name: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return `${item.face_identities[0].faces[0].first_name} ${item.face_identities[0].faces[0].last_name}`})).toString().split(',')[1],
    morning_check: morning_check[i] ? true : false,
    check_1: check_1[i] ? {check: check_1[i], value: true}:{check: check_1[i], value: false},
    check_2: check_2[i] ? {check: check_2[i], value: true}:{check: check_2[i], value: false},
    check_3: check_3[i] ? {check: check_4[i], value: true}:{check: check_3[i], value: false},
    check_4: check_4[i] ? {check: check_4[i], value: true}:{check: check_4[i], value: false},
    total_attendees: [morning_check[i], check_1[i], check_2[i], check_3[i], check_4[i]],
    total_absence: [morning_check[i], check_1[i], check_2[i], check_3[i], check_4[i]],
    absence_hours: morning_check[i],
  }))
  return { data: lastFiltered }
}
