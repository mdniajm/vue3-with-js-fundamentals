/*Create a Fetch HTTP Library */

class niajHTTP{
    /* GET REQUEST */
    async get(url_link){
        const res = await fetch(url_link);
        const resData = await res.json();
        return resData;
    }




    /* POST REQUEST */
    async post (url_link, data){
        const res = await fetch(url_link, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = await res.json();
        return resData;
    }




    /* PUT REQUEST */
    /* DELETE REQUEST */
}

