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

// Home Öne Çıkan Ürünler Listele
export const sectionIsPopularService = async()=>{
    try {
        const data = await axios.get('http://localhost:5000/product/fetch/popular')
        return data.data
    } catch (error) {
        console.log(error)
        throw error
    }
}
