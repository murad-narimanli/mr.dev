import React, {useContext, useState} from "react";
import { Switch, Route, __RouterContext } from "react-router";
import { useTransition, animated } from "react-spring";
import Home from  '../Pages/Home/Home'
import About from "../Pages/About/About";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Resume from "../Pages/Resume/Resume";
import Blog from "../Pages/Blog";
import BlogFull from "../Pages/Blog/BlogFull";
import Contact from "../Pages/Contact/Contact";
import Arrows from "../Elements/Arrows";
function Routing(props) {
    const [transitionProps , setTransitionProps] = useState(
        {
            // soldan saga
            from: { opacity: 0, position: "absolute", width: "100%", transform: "translate3d(-100vw, 0, 0)" },
            enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
            leave: { opacity: 0, transform: "translate3d(100vw, 0, 0)" }
            // sagdan sola
        }
    )
    const {location} = useContext(__RouterContext);
    const transitions = useTransition(location , location => location.pathname,transitionProps);
    return (
        <>
            <Arrows
                transitionProps={transitionProps}
                setTransitionProp={setTransitionProps}
            />
            {transitions.map(({item , props , key}) =>{
                return (
                    <animated.div key={key} className={'w-100 h-100'} style={props}>
                       <div style={{height:'100vh' , overflow:'hidden', width:'100%'}}>
                           <Switch location={item}>
                               <Route path="/" exact component={Home} />
                               <Route path="/about" exact component={About} />
                               <Route path="/portfolio" exact component={Portfolio} />
                               <Route path="/resume" exact  component={Resume} />
                               <Route path="/blog" exact component={Blog} />
                               <Route path="/blog/:id?" exact component={BlogFull} />
                               <Route path="/contact" exact component={Contact} />
                           </Switch>
                       </div>
                    </animated.div>
                )
            })}
        </>
    );

}

export default Routing;
