export const translateController = async (req,res)=>{
    try {
        const {text,source,target} = req.body;
        console.log(text,source,target)
        const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${source}|${target}`;
        const data = await fetch(url);
        if(!data) throw new Error("Internal server error!");
        const response_data = await data.json();
        res.status(200).json({data:response_data});

    } catch (error) {
        console.log("Error in controller",error);
        res.status(500).json({message:error.message});
    }

}