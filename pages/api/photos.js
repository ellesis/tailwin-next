export const getPhotosFromDB = () => {
  // DB Query 로직
  const photos = [
    {
      albumId: 1,
      id: 1,
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952'
    } //... 생략
  ]
  return photos
}

export default function photosHandler(request, response) {
  const {method} = request

  if (method === 'GET') {
    const photos = getPhotosFromDB()
    return response.status(200).json({
      photos
    })
  }
}

export const getStaticProps = async () => {
  const photos = getPhotosFromDB()
  return {
    props: {
      photos
    }
  }
}
