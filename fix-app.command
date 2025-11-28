#!/bin/bash

# Anytype 应用修复脚本
# 用于移除 macOS 隔离属性，允许未签名的应用运行

echo "=========================================="
echo "  Anytype 应用修复工具"
echo "=========================================="
echo ""

# 检查应用是否存在
APP_PATH="/Applications/Anytype.app"

if [ ! -d "$APP_PATH" ]; then
    echo "❌ 错误：找不到 Anytype.app"
    echo ""
    echo "请确保应用已安装到 /Applications/ 目录"
    echo ""
    read -p "按回车键退出..."
    exit 1
fi

echo "✅ 找到应用：$APP_PATH"
echo ""
echo "正在移除隔离属性..."
echo ""

# 移除隔离属性
sudo xattr -rd com.apple.quarantine "$APP_PATH"

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 成功！隔离属性已移除"
    echo ""
    echo "现在可以正常打开 Anytype 应用了"
    echo ""
else
    echo ""
    echo "❌ 操作失败，可能需要输入管理员密码"
    echo ""
fi

echo ""
read -p "按回车键退出..."

