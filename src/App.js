import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import BarChartDemo from "./apps/bar-chart/BarChartDemo";
import CollapsibleTreeDemo from "./apps/collapsible-tree/CollapsibleTreeDemo";
import VertexSphereDemo from "./apps/vertex-sphere/VertexSphereDemo";

const routes = [
  {
    path: "/bar-chart",
    label: "Bar Chart",
    component: BarChartDemo
  },
  {
    path: "/collapsible-tree",
    label: "Collapsible Tree",
    component: CollapsibleTreeDemo
  },
  {
    path: "/vertex-sphere",
    label: "Vertex Sphere",
    component: VertexSphereDemo
  }
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand-block">
            <p className="eyebrow">Module 6 • Week 3 • Day 1</p>
            <h1>React Animation Showcase</h1>
            <p className="brand-copy">
              Three CodeSandbox demos collected into one routed React app.
            </p>
          </div>
          <nav className="nav-links" aria-label="Animation demos">
            {routes.map(route => (
              <NavLink
                key={route.path}
                className="nav-link"
                activeClassName="is-active"
                to={route.path}
              >
                {route.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="app-main">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/bar-chart" />} />
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </main>
    </div>
  );
}

export default App;

