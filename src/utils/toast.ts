import 'element-plus/es/components/message/style/css';

import type { MessageParams } from 'element-plus';
import { ElMessage } from 'element-plus';

export function toast(options: MessageParams) {
  ElMessage(options);
}
