import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [index("routes/home.tsx"), route("politics","./routes/politics.tsx"), route("technology","./routes/technology.tsx"),route("welcome","./welcome/welcome.tsx"), route("healthcare","./routes/healthcare.tsx"), route("economics","./routes/economics.tsx"), route("environment","./routes/environment.tsx")] satisfies RouteConfig;

