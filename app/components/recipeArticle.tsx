type RecipeArticleParameters = {
    headerImgSrc: string,
    headerImgAlt: string,
    children: React.ReactNode;

}


export default function RecipeArticle(
    {headerImgSrc,headerImgAlt,  children}:RecipeArticleParameters)
{
        return (
        <article className="recipe @container  p-10  sm:rounded-2xl  bg-white">
            <header  className="-mx-10 -mt-10 w-[calc(100%+5rem)] @sm:mx-0 @sm:mt-0 @sm:w-full">
                <img className="@sm:rounded-lg" src={headerImgSrc} alt={headerImgAlt}  />
            </header>
            {children}
        </article>
    );
}


