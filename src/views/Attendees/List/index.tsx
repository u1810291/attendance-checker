import { useEffect, useMemo } from 'react'
import Table from '../../../components/Table'
import { headers, data, links, footer } from './helper'
import service from '../../../services/attendees'


export default () => {
  const header = useMemo(() => headers, [])
  useEffect(() => {
    const data = {
      "order": "DESC",
      "limit": 100,
      "face": {
        "face_ids": [10778]
      },
      "since": "2021-04-28T21:00:00.000Z",
      "until": "2021-04-29T20:59:59.000Z",
      "topics_by_modules": {
        "Kpx.Synesis.Faces": ["FaceMatched"], "Kpx.Synesis.Hikvision": ["FaceMatched"]
      }
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
