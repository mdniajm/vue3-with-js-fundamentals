/*Create a Fetch HTTP Library */

class niajHTTP{
    /* GET REQUEST */
    async get(url_link){
        const res = await fetch(url_link);
        const resData = await res.json();
        return resData;
    }




    /* POST REQUEST */
    async post (url_link, payload){
        const res = await fetch(url_link, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(payload)
        })

        const resData = await res.json();
        return resData;
    }




/* PUT REQUEST */
async update (url_link, payload){
    const res = await fetch(url_link, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(payload)
    })
    const resData = await res.json();
    return resData;
}

//     async put (url_link, payload){
//         const res = await fetch(url_link, { 
//             method: 'PUT',
//             headers: {
//                 'Content-type' : 'application/json'
//             },
//             body: JSON.stringify(payload)
//         })  
//     }

 /* DELETE REQUEST */

 async delete (url_link){
    const res = await fetch(url_link, {
        method: 'DELETE',
        headers: {
            'Content-type' : 'application/json'
        }
    })
    const resData = await 'Resource Deleted';
    return resData;
}

}