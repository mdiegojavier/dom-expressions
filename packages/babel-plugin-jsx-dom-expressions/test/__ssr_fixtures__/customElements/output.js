import { ssr as _$ssr } from "r-dom";
import { escape as _$escape } from "r-dom";

const template = _$ssr(
  ['<my-element some-attr="', '" someprop="', '"></my-element>'],
  _$escape(name, true),
  _$escape(data, true)
);

const template2 = _$ssr(
  ['<my-element some-attr="', '" someprop="', '"></my-element>'],
  _$escape(state.name, true),
  _$escape(state.data, true)
);

const template3 = _$ssr('<my-element><header slot="head">Title</header></my-element>');

const template4 = _$ssr('<slot name="head"></slot>');
