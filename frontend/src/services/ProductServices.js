import axios from 'axios'

// Home Banner Tıklanınca İlgili Ürün Detayı
export const sectionSlugProductService = async(productSlug)=>{
    try {
        const data = axios.get('http://localhost:5000/product/fetch',{params:{productSlug:productSlug}})
        return data.data
    } catch (error) {
        console.log(error)
        throw error
    }
}