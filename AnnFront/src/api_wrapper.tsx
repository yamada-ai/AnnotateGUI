import axios, {AxiosInstance} from 'axios';
import { URL_API } from './setting';

export const urlAPI = URL_API

const client: AxiosInstance = axios.create({
    baseURL: urlAPI,
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
  });

  function isEmpty(obj:any){
    return !Object.keys(obj).length;
}


export async function getDialoguesFilename():Promise<any>{
    const response = await client.get("/dialogues")
    const data = JSON.parse(response.data)
    return data
}

export async function getDialogue(fname:string):Promise<any>{
    const response = await client.get("/dialogue/"+fname)
    const data = JSON.parse(response.data)
    return data
}
