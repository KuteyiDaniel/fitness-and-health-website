import axios from 'axios'
export const apiKey:string = 'nU3PPztOZYQvPD1BSEK/qg==ZJ9atLGH9uLUTyBK'
export const baseURL:string = 'https://api.api-ninjas.com/v1/'


export async function fetchAbExercises (){
    let trainingUrl = `${baseURL}exercises`
  
     return await axios.get(trainingUrl, {
        headers: {
            'X-Api-Key': apiKey,
        },

        params : {
          'difficulty' : 'beginner',
          'muscle': 'abdominals'
        }
     })
}

/*
let url = 'https://api.api-ninjas.com/v1/exercises'
    
let [trainingData, setTrainingData] = React.useState(null)
let apiKey = 'nU3PPztOZYQvPD1BSEK/qg==ZJ9atLGH9uLUTyBK'

React.useEffect(function(){
  axios.get(url, {
    headers: {
        'X-Api-Key': apiKey
    },

    params : {
        'difficulty' : 'beginner'
    }
  }).then((response:any)=> {
    
    setTrainingData(response)
  console.log(response)
  })
}, [url])


*/