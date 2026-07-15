package com.example.Robot_Minds.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.Instant;

/**
 * A single editable piece of the home page, stored as a flat key/value pair
 * (e.g. key "hero.title" -> value "Robot Minds"). Image fields store the
 * public URL of an uploaded file (see SiteContentController#uploadImage)
 * rather than binary data. Keeping content as free-form key/value rows lets
 * the admin dashboard edit any section without a schema migration per field.
 */
@Entity
@Table(name = "site_content")
public class SiteContent {

    @Id
    @Column(length = 128)
    private String key;

    @Column(columnDefinition = "text")
    private String value;

    private Instant updatedAt;

    protected SiteContent() {
    }

    public SiteContent(String key, String value) {
        this.key = key;
        this.value = value;
        this.updatedAt = Instant.now();
    }

    public String getKey() {
        return key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
        this.updatedAt = Instant.now();
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }
}
