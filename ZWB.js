var daoshuya = JSON.parse($response.body);
daoshuya = {
  "request_date_ms" : 1701681914978,
  "request_date" : "2023-12-04T09:25:14Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-12-04T08:22:37Z",
    "original_application_version" : "577",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "pro_1999_1y" : {
        "original_purchase_date" : "2023-12-04T08:22:48Z",
        "expires_date" : "2099-12-18T08:22:48Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "310001646816102",
        "unsubscribe_detected_at" : "2023-12-04T08:25:56Z",
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2023-12-04T08:22:48Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-12-04T08:22:48Z",
        "product_identifier" : "pro_1999_1y",
        "expires_date" : "2099-12-18T08:22:48Z"
      }
    },
    "original_purchase_date" : "2023-12-04T07:10:02Z",
    "original_app_user_id" : "$RCAnonymousID:914d803538684a74a5107f61b96f4ec0",
    "last_seen" : "2023-12-04T08:22:37Z"
  }


};
$done({ body: JSON.stringify(daoshuya) });
