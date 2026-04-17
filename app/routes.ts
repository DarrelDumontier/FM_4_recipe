import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";



export default [
    layout("./routes/recipeLayout.tsx", [
        index("./routes/omelette.tsx")
     ]
    )   

] satisfies RouteConfig;
