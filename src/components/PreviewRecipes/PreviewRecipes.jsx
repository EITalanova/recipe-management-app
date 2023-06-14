
import style from '../PreviewRecipes/PreviewRecipes.module.scss';


import { useChangeScreen } from 'hooks/useChangeScreen';

import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import recipes from '../../api/fakeAPI.json';
console.log(recipes);

export const PreviewRecipes = () => {
  //   const previewRecipes = useSelector(selectRecipesPage);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchRecipes());
  //   }, [dispatch]);

  console.log(recipes);

  const screenWidthMobile = useChangeScreen(767.9);
  const screenWidthTablet = useChangeScreen(1439.9);

  const numberOfRecipes = recipes => {
    if (screenWidthMobile) {
      return recipes.slice(0, 4);
    }
    if (screenWidthTablet) {
      return recipes.slice(0, 6);
    }
    if (window.innerWidth >= 1440) {
      return recipes.slice(0, 12);
    }

    return recipes;
  };

  return (
    <>
      <div className={style.previewCategoriesBox}>
        <ul className={style.recipeList}>
          {numberOfRecipes(recipes).map(recipe => (
            <RecipeCard recipe={recipe} key={recipe._id.$oid} />
          ))}
        </ul>
        {/* <Button
                  className={style.seeAllBtn}
                  text="See All"
                //   to={`/categories/${category}`}
                /> */}

        {/* <Button
          className={style.otherCategoriesBtn}
          text="Other categories"
        //   to="/categories/Beef"
        /> */}
      </div>
    </>
  );
};
