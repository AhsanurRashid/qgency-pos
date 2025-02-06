"use server";

import axiosInstance from "@/utils/axios";

export async function getProducts(page: number) {
    const response = await axiosInstance.get(`/core/test/product?keyword=&limit=20&page=${page}`)
    return response.data.data;
}