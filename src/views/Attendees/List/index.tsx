import { useMemo } from 'react'
import Table from '../../../components/Table'
import { headers, data, links, footer } from './helper'
import service from '../../../services/attendees'

export default () => {
  const header = useMemo(() => headers, []);
  // /api/v1/faces/17282/images/266292/image-thumbnail?imghash=2cd66178e44a59847b6bd1b08ce78ca8
  // avatar_image_id: 266292
  // first_name: "google"
  // id: 17282
  // images: [{id: 266292, alg_type: 2,…}]
  // 0: {id: 266292, alg_type: 2,…}
  // alg_type: 2
  // face_id: 17282
  // id: 266292
  // image: "/api/v1/faces/17282/images/266292/image?imghash=2cd66178e44a59847b6bd1b08ce78ca8"
  // image_hash: "2cd66178e44a59847b6bd1b08ce78ca8"
  // image_thumbnail: "/api/v1/faces/17282/images/266292/image-thumbnail?imghash=2cd66178e44a59847b6bd1b08ce78ca8"
  // major_version: 20200706
  // minor_version: 1
  // quality: 0.6115514
  // status: "OK"
  // last_name: "google"
  // list_id: 1158
  // permissions: ["VIEW_CHANNEL", "MANAGE_PTZ_CHANNEL", "DOWNLOAD_CHANNEL", "VIEW_PLAN", "VIEW_FACE_LIST",…]
  // plates: []
  // plates_count: 0
  // urls: []

  useEffect(() => {
    const data = {
      facelist: { ids: [] },
      limit: 20,
      offset: 0,
      sort: "DESC",
      sort_field: "id"
    }
    service.getFaces(data).then((res) => {
      console.log(res)
    }).catch((err) => { console.log(err) })
  }, [])
  return (
    <div>
      <Table
        headers={header}
        data={data}
        links={links}
        footer={footer}
      />
    </div>
  )
}
