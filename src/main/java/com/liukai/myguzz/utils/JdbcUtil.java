package com.liukai.myguzz.utils;

import org.apache.log4j.Logger;

import java.sql.*;
import java.util.List;

/**
 * Created by hbjava on 2015/7/31.
 * 封装SQL查询工具类
 */
public class JdbcUtil {

    private static final Logger LOGGER = Logger.getLogger(JdbcUtil.class);

    /**
     * 获得数据库的连接
     *
     * @return
     */
    public static Connection getConnection(String driver, String url, String userName, String password) {
        Connection connection = null;
        try {
            Class.forName(driver);
            connection = DriverManager.getConnection(url, userName, password);
        } catch (Exception e) {
            LOGGER.error("Exception", e);
        }
        return connection;
    }

    /**
     * 增加、删除、改
     *
     * @param connection
     * @param preparedStatement
     * @param params
     * @return
     * @throws SQLException
     */
    public static boolean updateByPreparedStatement(Connection connection, PreparedStatement preparedStatement, List<Object> params) throws SQLException {
        boolean flag = false;
        if (connection != null) {
            int result = -1;
            int index = 1;
            if (params != null && !params.isEmpty()) {
                for (int i = 0; i < params.size(); i++) {
                    preparedStatement.setObject(index++, params.get(i));
                }
            }
            result = preparedStatement.executeUpdate();
            flag = result > 0;
        }
        return flag;
    }

    /**
     * 功能：释放资源
     *
     * @param connection 数据库连接
     * @param statement  查询状态
     * @param resultSet  结果集
     */
    public static void releaseResource(Connection connection, Statement statement, ResultSet resultSet) {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                LOGGER.error("SQLException", e);
            }
        }
        if (statement != null) {
            try {
                statement.close();
            } catch (SQLException e) {
                LOGGER.error("SQLException", e);
            }
        }
        if (resultSet != null) {
            try {
                resultSet.close();
            } catch (SQLException e) {
                LOGGER.error("SQLException", e);
            }
        }
    }

}
