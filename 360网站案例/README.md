

360��վ����

# �ص� #

1. ��ҳ��ʾ
2. ����


# ֪ʶ�� #

## ����ͼƬ���� ##

```

	.logo {
		width: 251px;
		height: 186px;
		background-image: url(img/logo.png);
		margin: 0 auto;
	}


	.info {
		height: 49px;
		background: url(img/info_1.png) no-repeat center center;
	}

```

## ����ʵ�� ##

��ʵ��ԭ�� ���嶯����2��״̬��Ȼ�����䶯������һ��ʱ���ﵽĿ��״̬���Ӷ�ʵ�ֶ�Ӧ��Ч����

```
    /* Ĭ�ϵļ��ֵ���൱�ڶ����ĳ�ʼ״̬ */
	.first img {
		margin: 0 24px;
		opacity: 0;
	}

    /* ���������ʽ�󣬾ͻ�ִ����ô�Ķ������൱�ڶ����������״̬ */
	.first.current img {
		margin: 0;
		opacity: 1;
		/*
		�涨���ù���Ч���� CSS ���Ե����ơ�
		�涨��ɹ���Ч����Ҫ���������롣
		�涨�ٶ�Ч�����ٶ����ߡ�
		�������Ч����ʱ��ʼ��
		*/
		transition: all 1s ease-out 0.3s;
	}

```


�������CSS����transition 
http://www.cnblogs.com/xiaohuochai/p/5347930.html

### ���Ʒ�ɢЧ�� ###

���Էֿ齲�⣬���õ��Թ�����ʵ���ֶ������ʽ��

```
.second img:nth-child(1) {
	transform: translate(35px, 78px) rotate(45deg);
}

```


# ���⼰��� #

## ҳ����ɫһƬ��ɫ ##

����ߣ�û�з���ʲô����

���� ��С�Ľ� .first ��� ͸��ɫ�ˣ���Ȼ��������


## js���벻��� ##

����ֿ���н���


# ���� #

fullPage ��ʹ��
http://www.dowebok.com/77.html


