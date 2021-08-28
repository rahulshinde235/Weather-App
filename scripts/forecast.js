const key='1KSwsNzFRLL70uPqhQ1WgaYAWV6TdAN4';
const getCity=async(city)=>{
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`
    const response=await fetch(base+query);
    const data=await response.json();
    return data[0];
};
const getConditions=async(id)=>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`
    const response=await fetch(base+query);
    const data=await response.json();
    return data[0];
};
// getCity('Pune').then(data=>{
//     return getConditions(data.Key);
// }).then(data=>console.log(data)
// ).catch(err=>console.log(err));
