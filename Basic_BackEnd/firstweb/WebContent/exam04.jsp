<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Scriptlet & Expression</title>
</head>
<body>
<%--jsp 주석입니다 --%>
<!-- html 주석입니다 -->
<%
	// Java 주석입니다
	for(int i=1; i<6; i++){
%>
<H<%=i %>>안녕하세요</H<%=i %>>
<%
	}
%>
</body>
</html>