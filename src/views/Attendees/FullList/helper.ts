export const links = [
  "#",
  "#",
  "#",
  "#",
  "#",
]
export const headers = [
  {
    header: '№',
    accessor: 'id',
    type: 'id'
  },
  {
    header: "Фото сурат",
    accessor: 'image',
    type: 'image'
  },
  {
    header: "Ф.И.Ш (унвони, лавозими)",
    accessor: 'full_info',
    type: 'name'
  },
  {
    header: "Эрталбки Текширув",
    accessor: 'in_time',
    type: 'time'
  },
  {
    header: "Умумий текширув 1",
    accessor: 'out_time',
    type: 'time'
  },
  {
    header: "Умумий теширув 2",
    accessor: 'in_count',
    type: 'time'
  },
  {
    header: "Умумий текширув 3",
    accessor: 'out_count',
    type: 'time'
  },
  {
    header: "Умумий теширув 4",
    accessor: 'in_work_time',
    type: 'time'
  },
  {
    header: "Текшируда бўлди (жами)",
    accessor: 'out_work_time',
    type: 'count'
  },
  {
    header: "Текшируда бўлмади (жами)",
    accessor: 'current_time',
    type: 'count'
  },
  {
    header: "Канча вақт бўлмади",
    accessor: 'current_time',
    type: 'time'
  }
]
export const data = [

  {
    id: 1,
    image: require('../../../assets/images/1.jpeg'),
    full_info: 'КАТТА СЕРЖАНТ Азизов Нодир Комилович МУХАНДИС',
    in_time: ['09:00'],
    out_time: ['13:10'],
    in_count: '13:10',
    out_count: '13:10',
    in_work_time: '05:10:45',
    out_work_time: 4,
    current_time: 3,
    current_time2: '05:10:45',
  },
  {
    id: 2,
    image: require('../../../assets/images/2.jpeg'),
    full_info: 'КАТТА СЕРЖАНТ Жалилов Акром Саидович БОШ МУТАХАССИС',
    in_time: ['09:00'],
    out_time: ['13:10'],
    in_count: '13:10',
    out_count: '13:10',
    in_work_time: '05:10:45',
    out_work_time: 4,
    current_time: 3,
    current_time2: '05:10:45',
  },
  {
    id: 3,
    image: require('../../../assets/images/3.jpeg'),
    full_info: 'СЕРЖАНТ Абдукадиров Салим Ботиров МУХАНДИС',
    in_time: ['09:00'],
    out_time: ['13:10'],
    in_count: '13:10',
    out_count: '13:10',
    in_work_time: '05:10:45',
    out_work_time: 4,
    current_time: 3,
    current_time2: '05:10:45',
  },
  {
    id: 4,
    image: require('../../../assets/images/4.jpeg'),
    full_info: 'СЕРЖАНТ Абдукадиров Салим Ботиров МУХАНДИС',
    in_time: ['09:00'],
    out_time: ['13:10'],
    in_count: '13:10',
    out_count: '13:10',
    in_work_time: '05:10:45',
    out_work_time: 4,
    current_time: 3,
    current_time2: '05:10:45',
  },
  {
    id: 5,
    image: require('../../../assets/images/5.jpeg'),
    full_info: 'СЕРЖАНТ Абдукадиров Салим Ботиров МУХАНДИС',
    in_time: ['09:00'],
    out_time: ['13:10'],
    in_count: '13:10',
    out_count: '13:10',
    in_work_time: '05:10:45',
    out_work_time: 4,
    current_time: 3,
    current_time2: '05:10:45',
  },
  {
    id: 6,
    image: require('../../../assets/images/6.jpeg'),
    full_info: 'СЕРЖАНТ Абдукадиров Салим Ботиров МУХАНДИС',
    in_time: ['09:00'],
    out_time: ['13:10'],
    in_count: '13:10',
    out_count: '13:10',
    in_work_time: '05:10:45',
    out_work_time: 4,
    current_time: 3,
    current_time2: '05:10:45',
  },
]
export const footer = {
  total: 6,
  in_work: 4,
  out_work: 2,
}