<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('a_i_pedia_tools', function (Blueprint $table) {
            $table->id();
            $table->foreignId("a_i_pedia_tool_categorie_id")->constrained()->onDelete('cascade');
            $table->string('name')->nullable();
            $table->string('screenshot')->nullable();
            $table->string('tool_link')->nullable();
            $table->text('description')->nullable();
            $table->enum('version_state', ['Premium', 'Fremium', 'Free Trial'])->default('Fremium');
            $table->integer('is_popular')->default(0);
            $table->enum('status', ['PUBLISHED', 'DRAFT', 'PENDING'])->default('DRAFT');
            $table->integer('ai_collection')->default(0);
            $table->index('a_i_pedia_tool_categorie_id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('a_i_pedia_tools');
    }
};
