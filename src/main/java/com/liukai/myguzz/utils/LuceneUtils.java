package com.liukai.myguzz.utils;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.util.Version;

import java.io.File;
import java.io.IOException;

import static com.liukai.myguzz.utils.ConfigUtils.LUCENE_INDEX_PATH;

/**
 * Created by Administrator on 2016/10/6 0006.
 */
public class LuceneUtils {

    public static void main(String[] args) throws IOException {

        File file = new File(LUCENE_INDEX_PATH);
        //1.构建索引
        Directory dir = FSDirectory.open(file);
        Analyzer analyzer = new StandardAnalyzer(Version.LUCENE_36);
        Document doc = new Document();
        doc.add(new Field("name", "zhangsan", Field.Store.YES, Field.Index.ANALYZED));
        doc.add(new Field("address", "beijing", Field.Store.YES, Field.Index.ANALYZED));
        doc.add(new Field("sex", "man", Field.Store.YES, Field.Index.NOT_ANALYZED));
        doc.add(new Field("introduce", "i am coder,my name is zhansan", Field.Store.YES, Field.Index.NO));

        IndexWriter indexWriter = new IndexWriter(dir, analyzer, IndexWriter.MaxFieldLength.LIMITED);
        // IndexWriterConfig indexWriterConfig = new IndexWriterConfig(Version.LUCENE_36,analyzer);
        // IndexWriter indexWriter = new IndexWriter(dir,indexWriterConfig);
        indexWriter.addDocument(doc);
        indexWriter.close();
    }
}
