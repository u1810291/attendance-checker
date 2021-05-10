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
  console.log(filter);
  // const maxTime = filter.map((el, id)=>({[el]:(Math.max.apply(null, filter[id][el].map((item)=>item.start_time)))}))
  // const someData = 
  filter.map((item, i)=> Object.entries(item[i]).filter((el)=>el.includes('start_time')))
    // Math.max.apply(null, Object.values(item[i]).map((item)=>item.start_time)) === el.start_time)));
  // console.log(someData)
  // console.log(data.filter((el)=>Math.max.apply(null, data.map((item)=>item.start_time)) === el.start_time));
  // console.log(Math.min.apply(null, data.map((item)=>item.start_time))); 
  const filtered = data.map((el)=>({
    channel_address:el.channel_address,
    channel_id: el.channel_id,
    channel_latitude: el.channel_latitude,
    channel_longitude: el.channel_longitude,
    channel_name: el.channel_name,
    channel_type: el.channel_type,
    end_time: el.end_time,
    event_id: el.event_id,
    face_identities: el.face_identities,
    id: el.id,
    level: el.level,
    module: el.module,
    original_quality_snapshot: el.original_quality_snapshot,
    params: el.params,
    plate_identities: el.plate_identities,
    snapshots: el.snapshots,
    source_name: el.source_name,
    start_time: el.start_time,
    stream_id: el.stream_id,
    topic: el.topic,
    video_sources: el.video_sources
  }))
  return { data: filtered }
}