import { For as _$For } from "r-dom";
import { createComponent as _$createComponent } from "r-dom";
import { assignProps as _$assignProps } from "r-dom";
import { dynamicProperty as _$dynamicProperty } from "r-dom";
import { ssr as _$ssr } from "r-dom";
import { escape as _$escape } from "r-dom";

const Child = props => [
  _$ssr(["<div>Hello ", "</div>"], _$escape(props.name)),
  _$ssr(["<div>", "</div>"], _$escape(props.children))
];

const template = props => {
  let childRef;
  const { content } = props;
  return _$ssr(
    ["<div>", "", "", "</div>"],
    _$createComponent(
      Child,
      _$assignProps(
        {
          name: "John"
        },
        Object.keys(props).reduce(
          (m$, k$) => ((m$[k$] = () => props[k$]), _$dynamicProperty(m$, k$)),
          {}
        ),
        {
          booleanProperty: true,

          get children() {
            return _$ssr("<div>From Parent</div>");
          }
        }
      )
    ),
    _$createComponent(Child, {
      name: "Jason",

      get children() {
        return _$ssr(["<div>", "</div>"], _$escape(content));
      }
    }),
    _$createComponent(Context.Consumer, {
      children: context => context
    })
  );
};

const template2 = _$createComponent(Child, {
  name: "Jake",
  dynamic: state.data,
  stale: state.data,
  handleClick: clickHandler,
  "hyphen-ated": state.data
});

const template3 = _$createComponent(Child, {
  get children() {
    return [_$ssr("<div></div>"), _$ssr("<div></div>"), _$ssr("<div></div>"), "After"];
  }
});

const template4 = _$createComponent(Child, {
  get children() {
    return _$ssr("<div></div>");
  }
});

const template5 = _$createComponent(Child, {
  dynamic: state.dynamic,
  children: state.dynamic
}); // builtIns

const template6 = _$createComponent(_$For, {
  each: state.list,

  get fallback() {
    return _$createComponent(Loading, {});
  },

  children: item => item
});

const template7 = _$createComponent(Child, {
  get children() {
    return [_$ssr("<div></div>"), state.dynamic];
  }
});

const template8 = _$createComponent(Child, {
  get children() {
    return [item => item, item => item];
  }
});

const template9 = _$createComponent(_garbage, {
  children: "Hi"
});

const template10 = _$ssr(
  ["<div>", " | ", " | ", " | ", " | ", " | ", "</div>"],
  _$createComponent(Link, {
    children: "new"
  }),
  _$createComponent(Link, {
    children: "comments"
  }),
  _$createComponent(Link, {
    children: "show"
  }),
  _$createComponent(Link, {
    children: "ask"
  }),
  _$createComponent(Link, {
    children: "jobs"
  }),
  _$createComponent(Link, {
    children: "submit"
  })
);

const template11 = _$ssr(
  ["<div>", " | ", "", " | ", "", " | ", "</div>"],
  _$createComponent(Link, {
    children: "new"
  }),
  _$createComponent(Link, {
    children: "comments"
  }),
  _$createComponent(Link, {
    children: "show"
  }),
  _$createComponent(Link, {
    children: "ask"
  }),
  _$createComponent(Link, {
    children: "jobs"
  }),
  _$createComponent(Link, {
    children: "submit"
  })
);

const template12 = _$ssr(
  ["<div> | ", " |  |  | ", " | </div>"],
  _$createComponent(Link, {
    children: "comments"
  }),
  _$createComponent(Link, {
    children: "show"
  })
);
