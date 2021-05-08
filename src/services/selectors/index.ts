
export const fullList = (promise: any) => new Promise<number>((res, rej) => {
  promise
    .then(({ data }: any) => {
      const filtered = data.map((el: any) => ({
        avatar_image_id: 266292,
        first_name: "google",
        id: el.id,
        images: el.images[0],
        last_name: el.last_name,
        list_id: el.last_id,
        permissions: el.permissions,
        plates: el.plates,
        plates_count: el.plates_count,
        urls: el.urls
      }))
      res(filtered);
    })
    .catch(rej);
});