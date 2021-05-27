import client from './client';

// TODO: 타입 정의해야함
export async function s3Upload(data: any) {
    const frm = new FormData();
    frm.append('upload', data);
    const response = await client.post('/api/v1/upload', frm, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
}
