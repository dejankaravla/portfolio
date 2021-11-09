import React, { useState } from "react";
import classes from "./Skills.module.css";
import TypeScript from "../../Images/typescriptlang-icon.svg";
import Webpack from "../../Images/webpack.svg";
import styled, { keyframes } from "styled-components";

const Skills = (props) => {
  // State

  const [cssState, setCssState] = useState(`
  10% {transform: translate3d(+${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, +${Math.floor(
    Math.random() * 100
  )}px);
  };
  
  30% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  50% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, +${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  75% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  }
  100% {transform: translateY()}
  `);
  const [html5State, setHtml5State] = useState(`
  5% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  
  40% {transform: translate3d(+${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  55% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, +${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  70% {transform: translate3d(${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  }
  100% {transform: translateY(0)}
  `);
  const [JSState, setJSState] = useState(`
  20% {transform: translate3d(+${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, +${Math.floor(
    Math.random() * 100
  )}px);
  };
  
  30% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, +${Math.floor(
    Math.random() * 100
  )}px);
  };
  40% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, +${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  50% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
    Math.random() * 100
  )}px);
  }
  100% {transform: translateY(0)}
  `);
  const [bootstrapState, setBootstrapState] = useState(`
  40% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  
  50% {transform: translate3d(+${Math.floor(Math.random() * 100)}%, +${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  60% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, +${Math.floor(Math.random() * 100)}%, +${Math.floor(
    Math.random() * 100
  )}px);
  };
  70% {transform: translate3d(${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, ${Math.floor(
    Math.random() * 100
  )}px);
  }
  100% {transform: translateY(0)}
  `);
  const [reactState, setReactState] = useState(`
  5% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  
  30% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  35% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  50% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
    Math.random() * 100
  )}px);
  }
  100% {transform: translateY(0)}
  `);
  const [gitState, setGitState] = useState(`
  20% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  
  40% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  60% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  80% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
    Math.random() * 100
  )}px);
  }
  100% {transform: translateY(0)}
  `);
  const [typeScriptState, setTypeScriptState] = useState(`
  25% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  
  50% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  60% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  90% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
    Math.random() * 100
  )}px);
  }
  100% {transform: translateY(0)}
  `);
  const [webPackState, setWebPackState] = useState(`
  25% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  
  50% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  60% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  90% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
    Math.random() * 100
  )}px);
  }
  100% {transform: translateY(0)}
  `);
  const [sassState, setSassState] = useState(`
  25% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  
  50% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  60% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(Math.random() * 100)}%, -${Math.floor(
    Math.random() * 100
  )}px);
  };
  90% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
    Math.random() * 100
  )}px);
  }
  100% {transform: translateY(0)}
  `);

  // SetState Functions

  const setLogic = () => {
    setCssState(`
    20% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    
    40% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    60% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    80% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
      Math.random() * 100
    )}px);
    }
    100% {transform: translateY(0)}
    `);
  };

  const setLogic1 = () => {
    setHtml5State(`
    25% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    
    35% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    60% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    90% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
      Math.random() * 100
    )}px);
    }
    100% {transform: translateY(0)}
    `);
  };
  const setLogic2 = () => {
    setJSState(`
    55% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    
    75% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    80% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    90% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
      Math.random() * 100
    )}px);
    }
    100% {transform: translateY(0)}
    `);
  };
  const setLogic3 = () => {
    setBootstrapState(`
    5% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    
    40% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    55% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    85% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
      Math.random() * 100
    )}px);
    }
    100% {transform: translateY(0)}
    `);
  };
  const setLogic4 = () => {
    setReactState(`
    15% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    
    30% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    70% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    80% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
      Math.random() * 100
    )}px);
    }
    100% {transform: translateY(0)}
    `);
  };
  const setLogic5 = () => {
    setGitState(`
    30% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    
    40% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    55% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    90% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
      Math.random() * 100
    )}px);
    }
    100% {transform: translateY(0)}
    `);
  };
  const setLogic6 = () => {
    setTypeScriptState(`
    70% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    
    75% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    80% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    90% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
      Math.random() * 100
    )}px);
    }
    100% {transform: translateY(0)}
    `);
  };
  const setLogic7 = () => {
    setWebPackState(`
    70% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    
    75% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    80% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    90% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
      Math.random() * 100
    )}px);
    }
    100% {transform: translateY(0)}
    `);
  };
  const setLogic8 = () => {
    setSassState(`
    70% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    
    75% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    80% {transform: translate3d(-${Math.floor(Math.random() * 100)}%, -${Math.floor(
      Math.random() * 100
    )}%, -${Math.floor(Math.random() * 100)}px);
    };
    90% {transform: translate3d(${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
      Math.random() * 100
    )}px);
    }
    100% {transform: translateY(0)}
    `);
  };

  const animate = keyframes`${cssState} `;
  const animate1 = keyframes`${html5State} `;
  const animate2 = keyframes`${JSState} `;
  const animate3 = keyframes`${bootstrapState} `;
  const animate4 = keyframes`${reactState} `;
  const animate5 = keyframes`${gitState} `;
  const animate6 = keyframes`${typeScriptState} `;
  const animate7 = keyframes`${webPackState} `;
  const animate8 = keyframes`${sassState} `;

  const CssComponent = styled.div`
    animation: ${animate} 40s;
    @media (max-width: 600px) {
      animation: none;
    }
  `;
  const Html5Component = styled.div`
    animation: ${animate1} 40s;
    @media (max-width: 600px) {
      animation: none;
    }
  `;
  const JSComponent = styled.div`
    animation: ${animate2} 40s;
    @media (max-width: 600px) {
      animation: none;
    }
  `;
  const BootstrapComponent = styled.div`
    animation: ${animate3} 40s;
    @media (max-width: 600px) {
      animation: none;
    }
  `;
  const ReactComponent = styled.div`
    animation: ${animate4} 40s;
    @media (max-width: 600px) {
      animation: none;
    }
  `;
  const GitComponent = styled.div`
    animation: ${animate5} 40s;
    @media (max-width: 600px) {
      animation: none;
    }
  `;
  const TypeScriptComponent = styled.div`
    animation: ${animate6} 40s;
    @media (max-width: 600px) {
      animation: none;
    }
  `;
  const WebPackComponent = styled.div`
    animation: ${animate7} 40s;
    @media (max-width: 600px) {
      animation: none;
    }
  `;
  const SassComponent = styled.div`
    animation: ${animate8} 40s;
    @media (max-width: 600px) {
      animation: none;
    }
  `;

  console.log(cssState);

  return (
    <div className={classes.Skills} id="Skills">
      <div>
        <h1>Skills</h1>
        <h3>“Life without knowledge is death in disguise.” - Talib Kweli</h3>
      </div>
      <div>
        <div className={classes.DevelopmentSkillsLanguage}>
          <p className={classes.Line}></p>
          <h2>Development Skills</h2>
          <div className={classes.DevelopmentSkills}>
            <CssComponent onAnimationEnd={() => setLogic()}>
              <img
                width="130"
                height="90"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"
                alt="css logo"
              />
            </CssComponent>
            <Html5Component onAnimationEnd={() => setLogic1()}>
              <img
                width="130"
                height="90"
                src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                alt="html logo"
              />
            </Html5Component>
            <SassComponent onAnimationEnd={() => setLogic8()}>
              <img
                width="130"
                height="90"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/512px-Sass_Logo_Color.svg.png"
                alt="sass logo"
              />
            </SassComponent>
            <BootstrapComponent onAnimationEnd={() => setLogic3()}>
              <img
                width="110"
                height="80"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                alt="bootstrap logo"
              />
            </BootstrapComponent>
            <JSComponent onAnimationEnd={() => setLogic2()}>
              <img
                width="130"
                height="90"
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                alt="javaScript logo"
              />
            </JSComponent>
            <TypeScriptComponent onAnimationEnd={() => setLogic6()}>
              <img width="100" height="90" src={TypeScript} alt="typeScript svg" />
            </TypeScriptComponent>
            <ReactComponent onAnimationEnd={() => setLogic4()}>
              <img
                width="130"
                height="90"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="react logo"
              />
            </ReactComponent>
            <WebPackComponent onAnimationEnd={() => setLogic7()}>
              <img width="250" height="200" className={classes.Skills__iconsWebpack} src={Webpack} alt="webpack svg" />
            </WebPackComponent>

            <GitComponent onAnimationEnd={() => setLogic5()}>
              <img
                width="130"
                height="90"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
                alt="git logo"
              />
            </GitComponent>
          </div>
        </div>
        <div className={classes.DevelopmentSkillsLanguage}>
          <p className={classes.Line}></p>
          <h2>Languages</h2>
          <div className={classes.LanguageSkills}>
            <p>Serbian (Native)</p>
            <p>English (Daily use)</p>
            <p>Francais (B1)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
