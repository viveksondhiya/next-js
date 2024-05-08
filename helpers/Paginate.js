export const Paginate = (data, pageNumber , pageSize) => {
    if(data.length===0){
        return [];
    }
    const startIndex = (pageNumber - 1)*pageSize ; 
    return data.slice(startIndex , startIndex + pageSize);
}