export default function ({$axios, redirect}) {
//  $axios.setHeader('token', '123')
//  $axios.setHeader("Accept", "application/json; charset=utf-8")
  $axios.onRequest(config => {
/*    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = "*";*/
//    console.log(config.headers)
//    config.headers['Content-Type'] = 'application/json';
//    config.headers.common['Access-Control-Allow-Origin'] = "*";
  })
}

/*import axios from 'axios'

const base = axios.create({
  baseURL: 'http://62.210.82.44:9989/'
})

export default base*/
