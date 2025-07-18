// index.d.ts
import * as React from 'react';

export interface FormaTextProps {
  content?: string;
  setContent?: (value: string) => void;
  geminiApiKey?: string;
  parentEditorClass?: string;
  toolBarClass?: string;
  textContentClass?: string;
  theme?: string;
  premiumApiKey?: string;
}

declare const FormaText: React.FC<FormaTextProps>;

export default FormaText;
