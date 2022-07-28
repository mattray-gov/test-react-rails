export const getBanners = async (setBanners) => {
     await fetch("/banners")
    .then((res) => res.json())
    .then((data) => setBanners(data))
    
};