/**
 * 数据加载提示框
 */
import { Spin } from 'antd'

let loadingNum = 0

const Loading = (function () {
    return {
        open(text = 'loading...') {
            loadingNum++
            if (loadingNum > 1) {
                return
            }
            // 生成dom
            const doc = window.document
            this.node = <Spin tip={text} />
            doc.body.appendChild(this.node)
        },
        close() {
            loadingNum--
            if (loadingNum > 0) {
                return
            }
            this.node && window.document.body.removeChild(this.node)
        }
    }
})()

export default Loading
