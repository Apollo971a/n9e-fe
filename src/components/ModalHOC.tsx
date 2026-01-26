import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import _ from 'lodash';
import { ConfigProvider } from 'antd';
import antdZhCN from 'antd/lib/locale/zh_CN';
import antdEnUS from 'antd/lib/locale/en_US';
import antdRuRU from 'antd/lib/locale/ru_RU';
import antdarEG from 'antd/lib/locale/ar_EG';  // add ar
import antdzhHK from 'antd/lib/locale/zh_HK';  // add hk
import antdjaJP from 'antd/lib/locale/ja_JP';  // add ja

export interface ModalWrapProps {
  visible: boolean;
  destroy: () => void;
}

export default function ModalHOC<T>(Component: React.FC<T & ModalWrapProps>) {
  return function ModalControl(
    config: T & {
      language?: string;
    },
  ) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.className = 'theme-dark';

    function destroy() {
      const unmountResult = ReactDOM.unmountComponentAtNode(div);
      if (unmountResult && div.parentNode) {
        div.parentNode.removeChild(div);
      }
    }

    const language = config.language ? config.language : window.localStorage.getItem('language') || 'zh_CN';

    function render(props: any) {
      ReactDOM.render(
        // <ConfigProvider locale={language === 'en_US' ? antdEnUS : language === 'ru_RU' ? antdRuRU : antdZhCN}>
        <ConfigProvider locale={language === 'en_US' ? antdEnUS : language === 'ru_RU' ? antdRuRU : language === 'ar_AE' ? antdarEG : language === 'zh_HK' ? antdzhHK : language === 'ja_JP' ? antdjaJP : antdZhCN}>  // add ar, hk, ja  
          <Router>
            <Component {...props} />
          </Router>
        </ConfigProvider>,
        div,
      );
    }

    render({ ...config, visible: true, destroy });

    return {
      destroy,
    };
  };
}
