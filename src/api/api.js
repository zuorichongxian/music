import request from '@/utils/request'
// 轮播图
export function getBanner() {
  return request({

    url: '/banner',

    method: 'get',


  })
}
// 获取推荐歌单
export function getPersonalized() {
  return request({

    url: '/personalized',

    method: 'get',


  })
}
// 获取各大榜单
export function getRank() {
  return request({

    url: '/toplist/detail',

    method: 'get',


  })
}
// 获取热门搜索
export function searchHot() {
  return request({

    url: '/search/hot',

    method: 'get',


  })
}


export function playlistDetail(id) {
  return request({

    url: '/playlist/detail',

    method: 'get',
    params: {
      id
    }

  })
}

// 获取热门歌手
export function getHotSinger() {
  return request({

    url: '/top/artists?offset=0&limit=50',

    method: 'get',


  })
}
// 获取歌手单曲
export function getArtists(id) {
  return request({

    url: '/artists',

    method: 'get',
    params: {
      id
    }


  })
}
