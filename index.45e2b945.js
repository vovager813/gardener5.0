import{m as A,j as u,V as F,S as r,a6 as i,f as E,U as o}from"./vendors.5f89d091.js";import{B as c,C as n,a as m,d as s}from"./common.c7cd8a45.js";var a={1:{content:`决策树是一种基于树结构进行决策的监督学习算法，既可用于分类也可用于回归。

【核心思想】
决策树通过递归地选择最优特征进行数据划分，将复杂决策过程分解为多个简单决策，最终形成一颗从根节点到叶子节点的决策路径。

【关键概念】
• 信息增益：基于信息熵的度量，选择使数据集不确定性减少最多的特征
• 基尼系数：衡量数据集纯度的指标，基尼系数越小，数据集越纯
• 剪枝：通过删除部分分支来防止过拟合

【构建过程】
1. 选择最优划分特征（信息增益最大/基尼系数最小）
2. 根据特征取值划分数据集
3. 对每个子数据集递归构建子树
4. 直到满足停止条件（纯度达到阈值/样本数过少）`,keyPoints:["信息增益","基尼系数","递归划分","剪枝策略"]},2:{content:`随机森林是一种基于 Bagging 思想的集成学习算法，通过构建多棵决策树并综合其预测结果来提升模型性能。

【核心原理】
随机森林 = Bagging + 随机特征选择

1. 数据随机：对训练数据进行有放回采样，为每棵树生成不同的训练子集
2. 特征随机：每个节点分裂时，从全部特征中随机选择一部分特征进行最优分裂
3. 集成预测：分类任务采用投票法，回归任务采用平均法

【为什么有效】
• 多棵树的组合降低方差，提高泛化能力
• 特征随机选择增加树之间的多样性
• 不易过拟合，对噪声数据有较强的鲁棒性

【与单棵决策树的对比】
单棵决策树容易过拟合，而随机森林通过集成多棵树有效缓解了这个问题。`,keyPoints:["Bagging","随机特征选择","集成预测","降低方差"]},3:{content:`随机森林的核心参数及调参建议：

【n_estimators】
• 含义：森林中决策树的数量
• 建议：100-500，越多性能越稳定但计算开销越大
• 调参：从小开始逐步增加，观察性能拐点

【max_features】
• 含义：每个节点分裂时考虑的最大特征数
• 建议：分类任务默认√M，回归任务默认M/3（M为总特征数）
• 调参：较小值增加树间多样性，较大值保留更多信息

【max_depth】
• 含义：树的最大深度
• 建议：不设置或设置较大值，配合 min_samples 控制复杂度
• 调参：限制深度可防止过拟合

【min_samples_split】
• 含义：节点分裂所需的最小样本数
• 建议：默认2，增大可防止过拟合

【min_samples_leaf】
• 含义：叶子节点最少样本数
• 建议：默认1，增大可使模型更平滑`,keyPoints:["n_estimators","max_features","max_depth","min_samples_split","min_samples_leaf"]},4:{content:`过拟合是决策树和随机森林面临的主要问题，预剪枝是有效的防治策略。

【什么是过拟合】
模型在训练集表现优异，但在测试集表现较差，说明模型学习了训练数据的噪声而非真实规律。

【预剪枝原理】
在树构建过程中提前停止生长，限制树的复杂度：

• 限制最大深度（max_depth）
• 限制节点分裂最小样本数（min_samples_split）
• 限制叶子节点最小样本数（min_samples_leaf）
• 限制叶子节点数量（max_leaf_nodes）

【其他防过拟合方法】
1. 后剪枝：先生成完整树，再自底向上剪枝
2. 正则化：在损失函数中加入复杂度惩罚项
3. 集成学习：随机森林本身就是对抗过拟合的有效方法
4. 交叉验证：选择最优参数组合`,keyPoints:["预剪枝","max_depth","min_samples_split","交叉验证","集成学习"]},5:{content:`随机森林与其他常见机器学习算法对比：

【随机森林 vs K近邻（KNN）】
• 随机森林：基于规则的决策，训练后有明确决策边界
• KNN：基于实例的懒惰学习，需要存储全部训练数据
• 选择：数据量大、需要可解释性时选随机森林

【随机森林 vs 线性回归】
• 随机森林：可捕获非线性关系，无需特征缩放
• 线性回归：仅捕获线性关系，计算效率高
• 选择：非线性数据选随机森林，线性趋势数据选线性回归

【随机森林 vs 逻辑回归】
• 随机森林：非线性决策边界，特征工程要求低
• 逻辑回归：线性决策边界，输出概率可解释
• 选择：复杂非线性分类选随机森林

【适用场景总结】
• 表格数据、中等规模：随机森林是首选
• 大规模数据、需要可解释性：考虑线性模型
• 图像、文本：深度学习更优`,keyPoints:["KNN","线性回归","逻辑回归","非线性","场景选择"]}},h=function(){var B=A.useRouter(),t=B.params.id||"1",l=decodeURIComponent(B.params.title||"课程详情"),e=a[t]||a[1],D=function(){A.navigateBack()};return u.jsxs(F,{className:"min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",children:[u.jsx(F,{className:"absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl",style:{backgroundColor:"rgba(139, 92, 246, 0.1)"}}),u.jsxs(r,{scrollY:!0,className:"h-full p-4 relative z-10",children:[u.jsxs(F,{className:"flex items-center gap-3 mb-6",children:[u.jsx(c,{size:"icon",variant:"ghost",className:"w-10 h-10 rounded-xl bg-slate-800 border border-slate-700",onClick:D,children:u.jsx(i,{size:18,color:"#94a3b8"})}),u.jsx(E,{className:"flex-1 text-lg font-semibold text-white truncate",children:l})]}),u.jsxs(n,{className:"bg-slate-800 border-slate-700 mb-4",children:[u.jsx(m,{className:"p-4 border-b border-slate-700",children:u.jsxs(F,{className:"flex items-center gap-3",children:[u.jsx(F,{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center",children:u.jsx(o,{size:18,color:"#fff"})}),u.jsx(E,{className:"text-base font-semibold text-white",children:"课程内容"})]})}),u.jsx(s,{className:"p-4",children:u.jsx(E,{className:"block text-sm text-slate-200 whitespace-pre-wrap leading-relaxed",children:e.content})})]}),u.jsx(n,{className:"bg-slate-800 border-slate-700 mb-6",children:u.jsxs(s,{className:"p-4",children:[u.jsx(E,{className:"block text-sm font-medium text-violet-400 mb-3",children:"关键要点"}),u.jsx(F,{className:"flex flex-wrap gap-2",children:e.keyPoints.map(function(C){return u.jsx(F,{className:"px-3 py-1 rounded-lg bg-violet-900 border border-violet-700",children:u.jsx(E,{className:"text-sm text-violet-300",children:C})},C)})})]})}),u.jsx(F,{className:"text-center pb-4",children:u.jsx(E,{className:"text-xs text-slate-500",children:"如有疑问，可在 AI 园丁中继续提问"})})]})]})};export{h as default};
