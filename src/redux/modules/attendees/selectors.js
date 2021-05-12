/* eslint-disable array-callback-return */
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
  const timeConverter = (unix_timestamp) => {
    const time = parseInt(unix_timestamp);
    if (Number.isNaN(time)) return '-';
    let date = new Date(time * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime 
  }
  
  const lastFiltered = [...Array(filter.length)].map((_, i)=>({    
    id: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.face_identities[0].faces[0].id})).toString().split(',')[1],
    images: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.original_quality_snapshot})).toString().split(',')[1],
    full_name: filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return `${item.face_identities[0].faces[0].first_name} ${item.face_identities[0].faces[0].last_name}`})).toString().split(',')[1],
    in_time: timeConverter(filterByPeopleIn[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]),
    out_time: timeConverter(filterByPeopleOut[i].map((el)=>el.map((item, i)=> {if(i !== 0) return item.start_time})).toString().split(',')[1]),
    number_of_in: getRandomInt(5),
    number_of_out:getRandomInt(3),
    time_at_work: 5,
    time_out_work: 2,
    current: getRandomInt(2),
  }))
  return { data: lastFiltered, filtered }
}




  // const filtered = data.map((el)=>({
  //   channel_address:el.channel_address,
  //   channel_id: el.channel_id,
  //   channel_latitude: el.channel_latitude,
  //   channel_longitude: el.channel_longitude,
  //   channel_name: el.channel_name,
  //   channel_type: el.channel_type,
  //   end_time: el.end_time,
  //   event_id: el.event_id,
  //   face_identities: el.face_identities,
  //   id: el.id,
  //   level: el.level,
  //   module: el.module,
  //   original_quality_snapshot: el.original_quality_snapshot,
  //   params: el.params,
  //   plate_identities: el.plate_identities,
  //   snapshots: el.snapshots,
  //   source_name: el.source_name,
  //   start_time: el.start_time,
  //   stream_id: el.stream_id,
  //   topic: el.topic,
  //   video_sources: el.video_sources
  // }))