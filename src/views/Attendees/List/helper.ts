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
    header: "Кириш вақти",
    accessor: 'in_time',
    type: 'name'
  },
  {
    header: "Чиқиш вақти",
    accessor: 'out_time',
    type: 'id'
  },
  {
    header: "Кириш сони",
    accessor: 'in_count',
    type: 'id'
  },
  {
    header: "Чиқиш сони",
    accessor: 'out_count',
    type: 'image'
  },
  {
    header: "Ишда бўлган вақти",
    accessor: 'in_work_time',
    type: 'image'
  },
  {
    header: "Ишдан ташқарида бўлганвақти",
    accessor: 'out_work_time',
    type: 'id'
  },
  {
    header: "Хозирги вақтда",
    accessor: 'current_time',
    type: 'id'
  }
]
export const data = [
  {
    id: 1,
    image: '',
    full_info: 'КАТТА СЕРЖАНТ Азизов Нодир Комилович МУХАНДИС',
    in_time: ['09:00'],
    out_time: '13:10',
    in_count: 1,
    out_count: 1,
    in_work_time: '05:10:45',
    out_work_time: '-',
    current_time: 'yes',
  },
  {
    id: 1,
    image: '',
    full_info: 'КАТТА СЕРЖАНТ Жалилов Акром Саидович БОШ МУТАХАССИС',
    in_time: [
      '09:00',
      '10,15',
      '11:50'
    ],
    out_time: [
      "10:05",
      "11:35"
    ],
    in_count: 3,
    out_count: 3,
    in_work_time: '04:25:34',
    out_work_time: '01:12:55',
    current_time: 'yes',
  },
  {
    id: 1,
    image: '',
    full_info: 'СЕРЖАНТ Абдукадиров Салим Ботиров МУХАНДИС',
    in_time: [
      '09:00',
      '12:45'
    ],
    out_time: [
      '12:30',
      '13:50'
    ],
    in_count: 2,
    out_count: 3,
    in_work_time: '05:10:45',
    out_work_time: '02:19:22',
    current_time: '',
  },
]