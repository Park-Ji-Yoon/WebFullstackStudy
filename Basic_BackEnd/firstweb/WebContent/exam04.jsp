<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Scriptlet & Expression</title>
</head>
<body>
<%--jsp �ּ��Դϴ� --%>
<!-- html �ּ��Դϴ� -->
<%
	// Java �ּ��Դϴ�
	for(int i=1; i<6; i++){
%>
<H<%=i %>>�ȳ��ϼ���</H<%=i %>>
<%
	}
%>
</body>
</html>