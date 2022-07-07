// dynamic routing api
import {getPhotosFromDB} from '../../photos'

export default function photoHandler(request, response) {
  const {
    method,
    query: {id}
  } = request

  if (method === 'GET') {
    const photo = getPhotosFromDB(id) // id를 입력하면 해당 아이디의 사진을 받아오도록 로직 수정
    return response.status(200).json({
      photo
    })
  }
}
