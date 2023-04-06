/*Create a Fetch HTTP Library */

class niajHTTP{
    /* GET REQUEST */
    async get(url_link){
        const res = await fetch(url_link);
        const reData = await res.json();
        return resData;
    }




    /* POST REQUEST */
    /* PUT REQUEST */
    /* DELETE REQUEST */
}