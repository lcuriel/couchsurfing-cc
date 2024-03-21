import { NextResponse } from 'next/server'
import User from '../../interfaces/users'
import { fetchRandomUserAPI } from '../../utils/mapusers'


export async function GET(request: Request) {
    try {
        const users = await fetchRandomUserAPI();
        return NextResponse.json({ data: users }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}