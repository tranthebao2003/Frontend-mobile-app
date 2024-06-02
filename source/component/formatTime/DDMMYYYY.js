const formatTime = (time) => {
    if(time.includes('-')){
      return time.split('-').reverse().join('-')
    } else if(time.includes('/')){
       return time.split('/').reverse().join('/')
    } else{
      console.log('Định dạng ngày tháng không đúng')
    }
  }
  
  export default formatTime