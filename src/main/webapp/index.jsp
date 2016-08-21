<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <title>index</title>
</head>
<body>

<%--<fmt:formatDate value="2016-08-14 11:11:11" pattern="yyyy-MM-dd hh:mm:ss"/>--%>
<fmt:parseDate pattern="yyyy-MM-dd hh:mm:ss" value="2016-08-14 11:11:11"/>

<fmt:setLocale value="zh"/>
<fmt:setBundle basename="i18n" var="lang"/>

<%--<fmt:message key="count.one" bundle="${lang}"/><br/>--%>
<%--<fmt:message key="count.two" bundle="${lang}"/><br/>--%>
<%--<fmt:message key="count.three" bundle="${lang}"/><br/>--%>

<fmt:message key="i18n.name" bundle="${lang}"/><br/>


<h1>所有的演示例子</h1>
<h3>[url=./dao.do?id=1]Dao正常错误[/url]</h3>
<h3>[url=./dao.do?id=10]Dao参数错误[/url]</h3>
<h3>[url=./dao.do?id=]Dao未知错误[/url]</h3>


<h3>[url=./service.do?id=1]Service正常错误[/url]</h3>
<h3>[url=./service.do?id=10]Service参数错误[/url]</h3>
<h3>[url=./service.do?id=]Service未知错误[/url]</h3>


<h3>[url=./controller.do?id=1]Controller正常错误[/url]</h3>
<h3>[url=./controller.do?id=10]Controller参数错误[/url]</h3>
<h3>[url=./controller.do?id=]Controller未知错误[/url]</h3>


<h3>[url=./404.do?id=1]404错误[/url]</h3>

</body>
</html>