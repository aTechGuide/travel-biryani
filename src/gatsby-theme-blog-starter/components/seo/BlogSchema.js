const blogSchema = (frontmatter, image, site, file) => {

  return {
    "@context": "http://schema.org", 
    "@type": "Recipe",
    "name": frontmatter.title,
    "image": `${site.siteMetadata.siteUrl}${image}`,
    "author": {
      "@type": "Person",
      "name": site.siteMetadata.author
    },
    "datePublished": frontmatter.date,
    "description": frontmatter.description,
    "keywords": frontmatter.tags.concat(site.siteMetadata.keywords),
    "prepTime": frontmatter.prep_time,
    "cookTime": frontmatter.cook_time,
    "recipeCategory": frontmatter.recipe_category,
    "recipeCuisine": frontmatter.recipe_cuisine,
    "recipeIngredient": frontmatter.recipe_ingredient
  }
}

export default blogSchema