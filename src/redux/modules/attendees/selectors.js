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